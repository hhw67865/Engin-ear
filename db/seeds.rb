TAGS = ["job posts", "inspiration", "mood swings", "memes", "blogs", "projects"]

puts "creating seed file 🌱..."

henry_wu = User.create(
    name: "Henry Wu",
    pronouns: "he/him",
    email: "henry@gmail.com",
    password: "Coding123!",
    job_title: "Full Stack Software Engineer",
    employer: "",
    open_to_work?: true,
    location: "Atlanta, GA",
    profile_picture: "https://ca.slack-edge.com/T02MD9XTF-U044FRCGEA3-ae6828a68de3-512"
)

ProfessionalLink.create(name: "Github", link: "github.com/henrywu", user_id: 1)
ProfessionalLink.create(name: "LinkedIn", link: "linkedin.com/henrywu", user_id: 1)

leah_cardoz = User.create(
    name: "Leah Cardoz",
    pronouns: "they/them",
    email: "leahcardoz@gmail.com",
    password: "Coding123!",
    location: "Brooklyn, NY",
    job_title: "Full Stack Software Engineer",
    employer: "",
    open_to_work?: true,
    profile_picture: "https://ca.slack-edge.com/T02MD9XTF-U041YJLNX9B-c015246c67c3-512"
)

ProfessionalLink.create(
    name: "Github",
    link: "https://github.com/lcardoz",
    user_id: "2"
)

ProfessionalLink.create(
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/lcardoz/",
    user_id: "2"
)

justin_woodruff = User.create(
    name: "Justin Woodruff",
    pronouns: "they/them",
    email: "justin.dwayne.woodruff@gmail.com",
    password: "Codine123!",
    location: "Omaha, NE",
    job_title: "Full Stack Software Engineer",
    employer: "",
    open_to_work?: true,
    profile_picture: "https://ca.slack-edge.com/T02MD9XTF-U044KA1P5UM-g970f90d1205-512"
)

adam_la_rosa = User.create(
    name: "Adam La Rosa",
    pronouns: "he/him",
    email: "adamlarosa@gmail.com",
    password: "Coding123!",
    location: "San Francisco, CA",
    job_title: "Software Engineering Instructor",
    employer: "Flatiron School",
    open_to_work?: false,
    profile_picture: "https://ca.slack-edge.com/T02MD9XTF-UMUPFF0BD-f087ac660b9b-192"
)

sam_boahen = User.create(
    name: "Sam D.Boahen",
    pronouns: "he/him",
    email: "samdboahen@gmail.com",
    password: "Coding123!",
    location: "Brooklyn, NY",
    job_title: "Software Engineering Instructor",
    employer: "Flatiron School",
    open_to_work?: false,
    profile_picture: "https://media.licdn.com/dms/image/C4D03AQGxMA-klXj00A/profile-displayphoto-shrink_400_400/0/1548552295799?e=1690416000&v=beta&t=cqoQzHeKzNB6VzesU4V9b3l6ZZbcQ5HHJX1ME1E985M"
)

ProfessionalLink.create(
    name: "Github",
    link: "https://github.com/di4bolik4l",
    user_id: "3"
)

ProfessionalLink.create(
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/justindwaynewoodruff/",
    user_id: "3"
)

Follow.create(followed_id: 1, follower_id: 2)
Follow.create(followed_id: 2, follower_id: 3)
Follow.create(followed_id: 3, follower_id: 1)
Follow.create(followed_id: 3, follower_id: 2)

1.times do
    Post.create(
        title: Faker::Quote.singular_siegler,
        post_body: Faker::Quote.famous_last_words,
        picture_url: "",
        user_id: User.all.sample.id
    )
end

1.times do
    Post.all.each{ |post| Comment.create(
        comment_body: Faker::Quotes::Shakespeare.hamlet_quote,
        post_id: post.id,
        user_id: User.all.sample.id
    )}
end

TAGS.each{|tag| Tag.create(name: tag)}

1.times do
    Post.all.each{ |post| PostTag.create(       
        post_id: post.id,
        tag_id: Tag.all.sample.id
    )}
end


post_1 = Post.create(
    title: "Thoughts on Engine-Ear.",
    post_body: "Pretty useful app! Follow me for the latest software engineering musings!",
    user_id: henry_wu.id
)

PostTag.create(
    post_id: post_1.id,
    tag_id: 2,
    emoji: "😀"
)

PostTag.create(
    post_id: post_1.id,
    tag_id: 5,
    emoji: "📝"
)

Comment.create(
    comment_body: "Just followed you!",
    post_id: post_1.id,
    user_id: justin_woodruff.id
)

post_2 = Post.create(
    title: "Officially a Fullstack Software Engineer",
    post_body: "Today I graduated from Flatiron School's software engineering bootcamp. Thank you to my classmates and instructors for all the help along the way!",
    picture_url: "https://hips.hearstapps.com/hmg-prod/images/graduation-wishes-1651254203.jpeg?crop=0.669xw:1.00xh;0.166xw,0&resize=1200:*",
    user_id: leah_cardoz.id
)

PostTag.create(
    post_id: post_2.id,
    tag_id: 2,
    emoji: "🥳"
)

PostTag.create(
    post_id: post_2.id,
    tag_id: 3,
    emoji: "🤯"
)

Comment.create(
    comment_body: "Congrats! You are a great student!",
    post_id: post_2.id,
    user_id: sam_boahen.id
)

Comment.create(
    comment_body: "We did it! Gonna miss working together.",
    post_id: post_2.id,
    user_id: henry_wu.id
)

post_3 = Post.create(
    title: "Hire Me!",
    post_body: "Passionate backend developer here looking for the next best opportunity... Looking forward to connecting!",
    user_id: justin_woodruff.id
)

PostTag.create(
    post_id: post_3.id,
    tag_id: 1,
    emoji: "🤓"
)

PostTag.create(
    post_id: post_3.id,
    tag_id: 2,
    emoji: "🦾"
)

Comment.create(
    comment_body: "Highly recommend Justin! They are an awesome person and coder",
    post_id: post_3.id,
    user_id: leah_cardoz.id
)

post_4 = Post.create(
    title: "Rock Climbing Software Engineer Meetup",
    post_body: "Planning a Yosemite climbing networking meetup for fellow software engineers. Hit me up if you'd like to join!",
    user_id: adam_la_rosa.id
)

PostTag.create(
    post_id: post_4.id,
    tag_id: 2,
    emoji: "💪"
)

PostTag.create(
    post_id: post_4.id,
    tag_id: 5,
    emoji: "👀"
)

Comment.create(
    comment_body: "I'm interested! Let me know what date you're thinking of doing it!",
    post_id: post_4.id,
    user_id: henry_wu.id
)

Comment.create(
    comment_body: "Interested as well!... Keep me posted on the details!",
    post_id: post_4.id,
    user_id: leah_cardoz.id
)

post_5 = Post.create(
    title: "Another Successful Bootcamp Graduation",
    post_body: "I just finished teaching another bootcamp cohort how to code. I love being a teacher and leader in my community. Super proud of all my students!",
    user_id: sam_boahen.id
)

PostTag.create(
    post_id: post_5.id,
    tag_id: 2,
    emoji: "🥰"
)

PostTag.create(
    post_id: post_5.id,
    tag_id: 5,
    emoji: "🤓"
)

Comment.create(
    comment_body: "Best teacher ever! Thank you for all the support.",
    post_id: post_5.id,
    user_id: leah_cardoz.id
)

Comment.create(
    comment_body: "Thanks for everything! Keep in touch!",
    post_id: post_5.id,
    user_id: henry_wu.id
)

Comment.create(
    comment_body: "I have grown so much as a person and coder because of your guidance and support. Gonna miss our cohort!",
    post_id: post_5.id,
    user_id: justin_woodruff.id
)

puts "Completed seeding! ✅"