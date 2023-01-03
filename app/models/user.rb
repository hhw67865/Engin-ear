class User < ApplicationRecord
    has_secure_password
    has_many :professional_links, dependent: :destroy
    has_many :posts, dependent: :destroy
    has_many :comments, dependent: :destroy
    has_many :commented_on_posts, through: :comments, source: :post
    has_many :followers, class_name: "Follow", foreign_key: "followed_id", dependent: :destroy
    # All the people that follow the user
    has_many :following, class_name: "Follow", foreign_key: "follower_id", dependent: :destroy
    # All the people the user is following

    


    validates :name, presence: true
    validates :email, presence: true, uniqueness: true
    validates :password, length: { minimum: 8 }, format: { with: /\A(?=.*[0-9])/, message: "must include at least one number" }, on: :create
    validates :password, format: { with: /\A(?=.*[A-Z])/, message: "must include at least one uppercase letter" }, on: :create
    validates :password, format: { with: /\p{Lower}/, message: "must include at least one lowercase letter" }, on: :create
    validates :password, format: { with: /\A(?=.*[^A-Za-z0-9])/, message: "must include at least one special character" }, on: :create
    validates :password, presence: true, on: :create

   
end
