import * as React from "react";

import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Bookshelf from "./components/Bookshelf";
import MyBadge from "./components/MyBadge";
import KbCard from "./components/KbCard";
import ParentAccount from "./components/ParentAccount";
import Book from "./components/Book/Index";
import Story from "./components/Book/Story"
import Frame from "./components/Book/Frame";
import Bookstore from './components/BookStore'

export default function App() {
  /* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="landing" element={<Landing />} />
        <Route path="home" element={<Home />} />
        <Route path="bookstore" element={<Bookstore />} />
        <Route path="bookshelf" element={<Bookshelf />} />
        <Route path="kb" element={<KbCard />} />
        <Route path="badge" element={<MyBadge />} />
        <Route path="parent" element={<ParentAccount />} />
        <Route path="books/:id" element={<Book />} />
        <Route path="books/:bookId/stories/:id" element={<Story />} />
        <Route path="books/:bookId/stories/:chapterId/frames/:id" element={<Frame />} />

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
