TAGS = ["job posts", "inspiration", "mood swings", "memes", "blogs", "projects"]

puts "creating seed file 🌱..."

User.create(
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

User.create(
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

User.create(
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

5.times do
    Post.create(
        title: Faker::Quote.singular_siegler,
        post_body: Faker::Quote.famous_last_words,
        picture_url: "",
        user_id: User.all.sample.id
    )
end

2.times do
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

puts "Completed seeding! ✅"