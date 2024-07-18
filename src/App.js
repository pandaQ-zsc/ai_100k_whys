import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Landing from "./components/Landing";
import Book from "./components/Book";
import Story from "./components/Story";
import Branch from "./components/Branch";
import Login from "./components/Login";
import BookStore from "./components/BookStore";
import ParentAccount from "./components/ParentAccount";

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
        <Route path="bookstore" element={<BookStore />} />
        <Route path="parent" element={<ParentAccount />} />
        <Route path="books/:id" element={<Book />} />
        <Route path="books/:bookId/stories/:id" element={<Story />} />
        <Route path="books/:bid/stories/:sid/branch/:id" element={<Branch />} />

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
