export const getImageUrl = (imagePath) => {
    const baseUrl = "http://localhost";

    return `${baseUrl}/storage/${imagePath.replace("public/", "")}`;
};

export const signOut = async (client, navigate, logout) => {
    try {
        await logout();
        localStorage.removeItem("token"); // remove user token when user logs out of the system
        client.clearStore(); // also clear the stored data of user
        navigate("/accounts/login"); // redirect the user when user logs out
    } catch (error) {
        console.log("error:", error);
    }
};

export const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
};

export const isLikedByUser = (currentUserId, postLikes) => {
    return (
        postLikes.length &&
        postLikes.filter(
            (postLike) => parseInt(postLike.user_id) === parseInt(currentUserId)
        ).length
    );
};
