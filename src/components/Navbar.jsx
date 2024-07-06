import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-tertiary border-bottom">
            <div class="container-md">
                <a class="navbar-brand fw-bold" href="#">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdTw5PDMg9neOehMBfp9Z8IGPhkC0rU9M6cQ&s" alt="Logo" width="45" height="45" class="d-inline-block align-text-right"/>
                    Mathrubhumi Newspaper
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/">Add Subscriber</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/view">View Subscribers</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/search">Search Subscriber</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/delete">Delete Subscriber</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
