import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ErrorLayout from "./layouts/ErrorLayout";
import UsersPage from "./pages/users/UsersPage";
import PostsPage from "./pages/posts/PostsPage";
import CommentsPage from "./pages/comments/CommentsPage";
import UserDetailsPage from "./pages/users/UserDetailsPage";
import HomePage from "./pages/homepage/HomePage";
import PostDetailsPage from "./pages/posts/PostDetailsPage";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <ErrorLayout/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: "users", element: <UsersPage/>},
            {path: "users/:id", element: <UserDetailsPage/>},
            {path: "posts", element: <PostsPage/>},
            {path: "posts/:postId/comments", element: <PostDetailsPage/>},
            {path: "comments", element: <CommentsPage/>},
        ]
    },

])

root.render(
    <RouterProvider router={router}/>
);