import { auth, currentUser } from "@clerk/nextjs/server";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

export const checkUser = async () => {
  //Gets logged-in user from Clerk
  const user = await currentUser();
  if (!user) {
    console.log("No User Found");
    return null;
  }

  // connection strapi DB
  if (!STRAPI_API_TOKEN) {
    console.error("❌ STRAPI_API_TOKEN is missing in .env.local");
    return null;
  }

  // pricing logic

  const { has } = await auth();
  const subscriptionTier = has({ plan: "pro" }) ? "pro" : "free";

  // api fetching
  try {
    // check if user exists in Strapi
    const existingUserResponse = await fetch(
      `${STRAPI_URL}/api/users?filters[clerkId][$eq]=${user.id}`,
      {
        headers: {
          Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        },
        cache: "no-store",
      },
    );
    if (!existingUserResponse.ok) {
      const errorText = await existingUserResponse.text();
      console.error("Strapi error response", errorText);
      return null;
    }

    //  If exists → updates subscription if needed
    const existingUserData = await existingUserResponse.json();
    if (existingUserData.length > 0) {
      const existingUser = existingUserData[0];

      if (existingUser.subscriptionTier !== subscriptionTier) {
        await fetch(`${STRAPI_URL}/api/users/${existingUser.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${STRAPI_API_TOKEN}`,
          },
          body: JSON.stringify({ subscriptionTier }),
        });
      }

      return { ...existingUser, subscriptionTier };
    }

    // Creation of new User in Strapi
    // Get authenticated role
    const roleResponse = await fetch(
      `${STRAPI_URL}/api/users-permissions/roles`,
      {
        headers: {
          Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        },
      },
    );

    const roleData = await roleResponse.json();
    const authenticatedRole = roleData.roles.find(
      (role) => role.type === "authenticated",
    );
    if (!authenticatedRole) {
      console.error("❌ Authenticated role not found");
      return null;
    }

    const userData = {
      username: user.name || user.emailAddresses[0].emailAddress.split("@")[0],
      email: user.emailAddresses[0].emailAddress,
      password: `Clerk_managed_${user.id}_${Date.now()}`,
      confirmed: true,
      blocked: false,
      clerkId: user.id,
      role: authenticatedRole.id,
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      imageUrl: user.imageUrl || "",
      subscriptionTier,
    };

    const newUserResponse = await fetch(`${STRAPI_URL}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      },
      body: JSON.stringify(userData),
    });

    if (!newUserResponse.ok) {
      const errorText = await newUserResponse.text();
      console.error("❌ Error creating User:", errorText);
      return null;
    }

    // eturns the Strapi user
    const newUser = await newUserResponse.json();
    return newUser;
  } catch (error) {
    console.error("❌ Error in checkUser:", error.message);
    return null;
  }
};
