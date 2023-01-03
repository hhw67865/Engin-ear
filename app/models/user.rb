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
    validates :password, presence: true, length: { minimum: 8 }

    validate :password_lower_case
    validate :password_uppercase
    validate :password_special_char
    validate :password_contains_number

    def password_uppercase
        if self.password
            return if !!password.match(/\p{Upper}/)
            errors.add :password, ' must contain at least 1 uppercase '
        end
    end
    
    
    def password_lower_case
        if self.password
            return if !!password.match(/\p{Lower}/)
            errors.add :password, ' must contain at least 1 lowercase '
        end
    end

    def password_special_char
        if self.password
            special = "?<>',?[]}{=-)(*&^%$#`~{}!"
            regex = /[#{special.gsub(/./){|char| "\\#{char}"}}]/
            return if password =~ regex
            errors.add :password, ' must contain special character'
        end
    end

    def password_contains_number
        if self.password
            return if password.count("0-9") > 0
            errors.add :password, ' must contain at least one number'
        end
    end
end
