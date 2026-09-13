<div align="center">

<img src="./src/assets/NAv.png" alt="Flixlist Logo" width="90%" style="margin-bottom: 30px;"/>
</div>

# 🎬 Flixlist

**Flixlist** is a modern and responsive movie and series browsing web application built with **React.js, TypeScript, and Tailwind CSS**.

The application allows users to browse movies and series, explore their information, add titles to a personal watch list, and manage selected items from a dedicated **My Watch List** section.

🔗 **Live Website:** [Flixlist](https://movies-watchlist-sm-sazzad.netlify.app/)

---

## 📖 About The Project

**Flixlist** is a frontend web application designed for users who want to browse movies and series and keep track of the titles they want to watch later.

The application provides separate sections for **Movies**, **Series**, and a personal **My Watch List**, while the **Home** section displays all available content.

Users can add movies or series to their watch list directly from the content cards. The selected items are then displayed in the **My Watch List** section, where they can be managed or removed.

The project was built as a practical React and TypeScript project to strengthen my understanding of component-based development, state management, dynamic rendering, TypeScript, and responsive UI development.

---

## ✨ Features

### 🏠 Home

The Home section is the default section when users enter the website.

It displays:

* Movies
* Series
* Movie/Series badges
* Ratings
* Genres
* Release dates
* Add to Watch List buttons

Users can browse all available content from a single place.

---

### 🎬 Movies

The Movies section displays only movie content.

Users can:

* Browse available movies
* View movie information
* Check ratings and genres
* See release dates
* Add movies to their personal watch list

---

### 📺 Series

The Series section displays only series content.

Users can:

* Browse available series
* View series information
* Check ratings and genres
* See release dates
* Add series to their personal watch list

---

### ❤️ My Watch List

The **My Watch List** section allows users to manage the movies and series they have selected.

Users can:

* View all selected movies and series
* Remove items from the watch list
* See the total number of selected items
* Return to the Home section to add more items

The number of selected items is displayed dynamically in the navbar.

---

### 🔢 Dynamic Watch List Counter

The navbar contains a **My Watch List** button with a dynamic counter.

For example:

```text
My Watch List  5
```

When a user adds an item, the number increases.

When an item is removed, the number decreases automatically.

This gives users a quick overview of how many titles they have added to their watch list.

---

### 📭 Empty Watch List State

When there are no selected items, the My Watch List section displays an empty-state message:

> **No item selected**
> Add item to see them here

An **Add Item** button is also displayed.

When the user clicks the button, they are taken back to the Home section where they can browse and add movies or series.

---

## 🧭 Navigation

Flixlist includes a clean navigation bar with:

* 🎬 Flixlist logo and name
* 🏠 Home
* 🎞️ Movies
* 📺 Series
* ❤️ My Watch List
* 🔢 Dynamic watch-list counter

The **Home** section is selected by default when the website is opened.

Users can easily switch between Home, Movies, Series, and My Watch List.

---

## 🦸 Hero Section

The Home page includes a visually engaging hero section featuring a movie-related image.

The hero section provides a strong visual introduction to the Flixlist experience before users start browsing the available content.

---

## 🎞️ Movie & Series Cards

Each content card provides important information about the movie or series.

A typical card contains:

* 🎬 Poster/Image
* 🏷️ Movie or Series badge
* ⭐ Rating
* 🎥 Title
* 🎭 Genre
* 📅 Release Date
* ❤️ Add to Watch List button

The cards are designed to provide the necessary information in a clean and user-friendly layout.

---

## 🦶 Footer

The Flixlist footer is divided into four main sections.

### 🎬 Brand

Contains:

* Flixlist logo
* Website name
* Short description

### 🔗 Quick Links

Provides quick navigation to:

* Home
* Movies
* Series

### ⚡ Features

Contains:

* Browse Movies
* Browse Series
* Watch List
* Manage Watch List

### 🤝 Connect With Me

Users can connect with the developer through:

* [GitHub](https://github.com/sm-sazzad)
* [LinkedIn](https://www.linkedin.com/in/sm-sazzad/)
* [Facebook](https://www.facebook.com/sazzad.hossain.5758/)

---

## 📱 Responsive Design

Flixlist is fully responsive and designed to provide a smooth experience across different screen sizes.

The interface adapts to:

* 📱 Mobile devices
* 📲 Tablets
* 💻 Laptops
* 🖥️ Desktop screens

The layout, navigation, cards, hero section, watch list, and footer are designed to remain usable across different screen sizes.

---

## 🛠️ Technologies Used

### Frontend

* **React.js**
* **TypeScript**
* **Tailwind CSS**

### Tools & Development

* **Vite**
* **Git**
* **GitHub**
* **Netlify**

---

## ⚛️ React Concepts Practiced

While building Flixlist, I practiced several important React concepts, including:

* Components
* Props
* State Management
* `useState`
* Event Handling
* Conditional Rendering
* Dynamic Rendering
* Array Methods
* Data Filtering
* Component Reusability
* Parent-Child Communication
* State Updates
* Managing Selected Items

---

## 🔷 TypeScript Concepts

TypeScript was used throughout the project to make the application more structured and type-safe.

The project includes concepts such as:

* Type definitions
* Interfaces
* Typed props
* Typed state
* Typed data
* Type-safe component development

Using TypeScript helped improve code reliability and made the structure of movie and series data easier to understand and maintain.

---

## 🎨 Styling

**Tailwind CSS** was used to build the user interface.

It was used for:

* Responsive layouts
* Flexbox
* Grid
* Spacing
* Typography
* Buttons
* Cards
* Navigation
* Hero section
* Footer
* Responsive breakpoints
* Hover and interactive states

---

## 🔄 How The Application Works

The basic user flow of Flixlist looks like this:

```text
                    Flixlist
                       │
                       ↓
                     Home
                       │
              ┌────────┴────────┐
              ↓                 ↓
           Movies             Series
              │                 │
              └────────┬────────┘
                       ↓
              Browse Content
                       │
                       ↓
             Add to Watch List
                       │
                       ↓
              Watch List Counter
                       │
                       ↓
                My Watch List
                       │
              ┌────────┴────────┐
              ↓                 ↓
          View Items        Remove Items
```

---

## ❤️ Watch List Flow

When a user clicks **Add to Watch List**:

```text
Movie / Series Card
        ↓
Add to Watch List
        ↓
Selected Item Added
        ↓
Watch List Counter Updates
        ↓
Item Appears in My Watch List
```

When the user removes an item:

```text
My Watch List
      ↓
Remove Item
      ↓
Selected Item Removed
      ↓
Watch List Counter Updates
```

---

## 📭 Empty State Flow

If the watch list doesn't contain any items:

```text
My Watch List
      ↓
No item selected
      ↓
Add item to see them here
      ↓
Add Item
      ↓
Home
      ↓
Browse & Select Movies / Series
```

---

## 📚 What I Learned

Building **Flixlist** helped me move beyond small React practice tasks and work on a more complete frontend application.

Through this project, I practiced:

* Building reusable React components
* Managing application state with `useState`
* Passing data between components
* Handling user interactions
* Dynamically rendering data
* Filtering movies and series
* Managing selected items
* Updating UI based on state changes
* Creating conditional UI
* Creating an empty-state experience
* Working with TypeScript interfaces and types
* Building responsive interfaces with Tailwind CSS
* Structuring a React project
* Creating a real-world style frontend application

---

## 🚀 Future Improvements

There are several features that can be added to Flixlist in future versions.

### 🔍 Search

Add a search system so users can quickly find movies and series by title.

### 🎭 Genre Filtering

Allow users to filter content by genres such as:

* Action
* Comedy
* Drama
* Horror
* Romance
* Thriller

### ⭐ Rating Filter

Allow users to filter movies and series based on their ratings.

### 📄 Details Page

Create a dedicated details page for each movie or series containing:

* Full description
* Cast
* Genres
* Release date
* Rating
* Trailer
* Additional information

### 🎬 Trailer Integration

Add movie and series trailers for a more interactive experience.

### 💾 Local Storage

Persist the user's watch list using browser Local Storage so selected items remain available after refreshing the page.

### 🌐 Real Movie API

Replace static data with a real movie API to provide dynamic movie and series information.

### 🔐 Authentication

Add user authentication so users can maintain their own personal watch lists.

---

## ⚙️ Getting Started

Follow these steps to run Flixlist locally.

### 1. Clone the Repository

```bash
git https://github.com/sm-sazzad/Movies-Watchlist.git
```

### 2. Navigate to the Project

```bash
cd Movies-Watchlist
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The application will start on the local development server provided by Vite.

---

## 🌐 Live Demo

Experience the live version of **Flixlist**:

👉 [Visit Flixlist](https://movies-watchlist-sm-sazzad.netlify.app/)

---

## 👨‍💻 Developer

### Sazzad Hossain

Frontend Developer | React & TypeScript Learner

I'm continuously learning modern frontend development and building practical projects to improve my development skills, problem-solving ability, and understanding of real-world applications.

### 🔗 Connect With Me

* [GitHub](https://github.com/sm-sazzad)
* [LinkedIn](https://www.linkedin.com/in/sm-sazzad/)
* [Facebook](https://www.facebook.com/sazzad.hossain.5758/)

---

## ⭐ Support

If you like **Flixlist**, feel free to:

* ⭐ Star the repository
* 🍴 Fork the project
* 🐛 Report issues
* 💡 Suggest improvements
* 📢 Share the project

---

## ❤️ Acknowledgement

This project was built as part of my continuous journey of learning and practicing modern frontend development with **React, TypeScript, and Tailwind CSS**.

---

<div align="center">

### 🎬 Flixlist

**Browse. Select. Save. Watch Later.**

Built with ❤️ using **React.js + TypeScript + Tailwind CSS**

</div>
