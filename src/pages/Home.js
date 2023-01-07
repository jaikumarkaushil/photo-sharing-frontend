import Post from "../components/Post";
import Suggestions from "../components/Suggestions";
import Stories from "../components/Stories";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import GET_CURRENT_USER from "../graphql/GET_CURRENT_USER";
import GET_FEED from "../graphql/GET_FEED";
import LOGOUT from "../graphql/LOGOUT";
import { useApolloClient } from "@apollo/client";
import { signOut } from "../Helpers";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Home(props) {
    const navigate = useNavigate();
    // const { loading, error, data } = useQuery(GET_FEED);
    // const {
    //     loading: loadingCurrentUser,
    //     error: errorCurrentUser,
    //     data: dataCurrentUser,
    // } = useQuery(GET_CURRENT_USER);
    const data = {
        feed: [
            {
                id: "67642j",
                caption: "Good Vibe near sea",
                user: {
                    image: "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=",
                    username: "Jaik1019",
                },
                image: "https://images.unsplash.com/photo-1591178675678-1e76fbc255ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80",
                likes: 10,
                created_at: "12-12-2022",
                comments: [
                    {
                        id: 1,
                        user: {
                            image: "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=",
                            username: "Ramesh",
                        },
                        comment: "Total vibe check 🕺🏻🕺🏻🕺🏻❄️😂🙌🏻",
                        isLiked: true
                    },
                    {
                        id: 2,
                        user: {
                            image: "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=",
                            username: "Jaik1013",
                        },
                        comment: "Living your life to the fullest 😍❤️",
                        isLiked: true
                    }
                ],
                postLikes: []

            },
            {
                id: "67642r",
                caption: "No other time suits me",
                image: "https://images.unsplash.com/photo-1507539989371-99615e449486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1262&q=80",
                user: {
                    id: '6397eea298bd108ae779eed1',
                    image: "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=",
                    username: "Jaik1019",
                },
                likes: 6,
                created_at: "12-12-2022",
                comments: [
                    {
                        id: 1,
                        user: {
                            image: "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=",
                            username: "Jaik1013",
                        },
                        comment: "i like when money makes a difference but hate it when it makes u different 💯",
                        isLiked: true
                    },
                    {
                        id: 2,
                        user: {
                            image: "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=",
                            username: "Ramesh",
                        },
                        comment: "Living your life to the fullest 😍❤️",
                        isLiked: true
                    }
                ],
                postLikes: []

            }
        ]
    }
    const dataCurrentUser = {
        me: {
            id: '6397eea298bd108ae779eed1',
            username: "Jaik1019",
            image: "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
        }
    }

    const [logout] = "Logged Out Successfully";
    const client = useApolloClient();

    // if (loadingCurrentUser || loading) {
    //     return <Spinner />;
    // }

    // if (error || errorCurrentUser) {
    //     return "Error...";
    // }

    return (
        <main className="bg-zinc-50 grid grid-cols-3">
            <div className="md:px-12 lg:px-0 col-span-3 lg:col-span-2">
                {data.feed.map((post) => (
                    <Post
                        key={post.id}
                        post={post}
                        id={post.id}
                        currentUserId={dataCurrentUser.me.id}
                        caption={post.caption}
                        image={post.image}
                        username={post.user.username}
                        userImage={post.user.image}
                        likes={post.likes}
                        created_time_ago={post.created_at}
                        comments={post.comments}
                        postLikes={post.postLikes}
                    />
                ))}
            </div>
            <div className="col-span-1 hidden lg:block">
                <div className="fixed p-5 w-80">
                    <div className="flex flex-row">
                        <a href="">
                            <img
                                className="rounded-full"
                                src={dataCurrentUser.me.image}
                                width="100"
                            />
                        </a>
                        <div className="w-72 pl-2 m-auto">
                            <div className="text-sm font-medium">
                                <Link to={`/${dataCurrentUser.me.username}`}>
                                    {dataCurrentUser.me.username}
                                </Link>
                            </div>
                            <div className="text-gray-500 text-sm leading-4">
                                {dataCurrentUser.me.name}
                            </div>
                        </div>
                        <div className="w-32 text-right m-auto">
                            <a
                                className="text-xs text-sky-500 font-bold cursor-pointer"
                                onClick={() =>
                                    signOut(client, navigate, logout)
                                }
                            >
                                Sign Out
                            </a>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        </main>
    );
}


// import React from 'react';
// import GET_CURRENT_USER from "../graphql/GET_CURRENT_USER";
// import { useQuery, useMutation } from "@apollo/client";



// const Home = () => {
//     const { loading, error, data } = useQuery(GET_CURRENT_USER);
//     console.log(data)
//     return(
//         <div style={{height: "100vh"}}>
//             <div className="d-flex flex-column align-items-center justify-content-center">
//                 <div className="text-center">
//                     <span className="fa fa-spinner fa-puyarn lse fa-3x fa-fw text-primary"></span>
//                     <p>Loading . . .</p>
//                 </div>
//                 <div className="d-flex flex-row align-items-center justify-content-center mx-auto w-100">
//                     <img src="images/JaiInsta-Logo.png" alt="Jai-Logo"/>
//                     <h1 className="light-font">Photo Sharing App</h1>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Home;
