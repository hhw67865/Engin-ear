![Engine-Ear. Logo](./client/src/engine-ear-readme-logo1.png)

# Engine-Ear.

Welcome to Engine-Ear. - The 'LinkedIn' for software engineers!

This React & Rails single-page application was created by [Henry Wu](https://github.com/hhw67865), [Leah Cardoz](https://github.com/lcardoz) & [Justin Woodruff](https://github.com/di4bolik4l) for their Phase 4 software engineering group project at Flatiron School (1 week to build).

## Features:

Without logging in, users should be able to:
- See posts created by other users and filter posts by tags.
- See other users (but not their profiles).
- Sign up by creating a user account.
- Search for users.

Logged in users should be able to:
- Update their profile.
- Delete their account.
- Create posts.
- Comment on posts and delete their comments.
- View other users' profiles.
- Filter posts to only show followed users' posts.
- Follow and unfollow other users.

## Demos:

[Watch Leah demo the entire app here!](https://vimeo.com/799307351)

**Landing Page**

![Landing Page Gif](public/Landing-Page-Gif-Engine-Ear-high.gif)

**User Login / User Profile**

![User Login & Profile Gif](public/User-Login-Gif-Engine-Ear-high.gif)

**Edit Profile**

![Edit Profile Gif](public/Edit-Profile-Gif-Engine-Ear-high.gif)

**Create Post**

![Create Post Gif](https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/36914b1c-2e60-4ddc-a94a-03b563e1c043.gif?ClientID=vimeo-core-prod&Date=1677024989&Signature=a4765b3a2212f51eeb3d6917c24eb8c1beb310b5)

**Add Comment / Delete Comment on Post**

![Add & Delete Comment Gif](https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/792552bc-6511-4589-b037-ace972969734.gif?ClientID=vimeo-core-prod&Date=1677025558&Signature=8e7448eef2427dce84817f85111542180c68ca98)

**User Search / Load Different User Profile / Follow a User**

![User Search Gif](https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/0d2f40b3-e0f4-4c44-accc-4bd41cf5cb34.gif?ClientID=vimeo-core-prod&Date=1677024008&Signature=cf90deb24b50aae41f6cae59af9337fcf0f5f8f7)


## Tech Stack & Requirements:

Backend Ruby/Rails:
- ruby 2.7.4
- rails 7.0.4
- SQLite
- bcrypt
- active_model_serializers

Frontend React/create-react-app:
- react 18.2.0
- react-router-dom 6.6.1

## Getting Started:

1. Install dependencies:

```sh
npm install
```

2. Start Rails server:

```sh
rails s
```

3. Start React client server:

```sh
cd client
```
```sh
npm start
```