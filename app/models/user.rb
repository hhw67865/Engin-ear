class User < ApplicationRecord
    has_secure_password
    has_many :professional_links
    has_many :posts
    has_many :comments
    has_many :commented_on_posts, through: :comments, source: :post
    has_many :followers, class_name: "Follow", foreign_key: "followed_id"
    # All the people that follow the user
    has_many :following, class_name: "Follow", foreign_key: "follower_id"
    # All the people the user is following
end
