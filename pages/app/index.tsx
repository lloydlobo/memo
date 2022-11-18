import React from "react";
import Layout from "../../components/Layout";
import UserInitialsAvatar from "../../components/user/UserInitialsAvatar";

export default function AppIndex() {
    return (
        <Layout title="View all">
            <UserInitialsAvatar />
        </Layout>
    );
}

AppIndex.auth = true;
