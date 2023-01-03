class Follow < ApplicationRecord
    belongs_to :follower, class_name: "User"
    belongs_to :followed, class_name: "User"
    
    # validates :follower_id, uniqueness: { scope: :followed_id, message: "You can't follow yourself" }
    # cant follow urself
    # cant follow same person twice

    validates :followed_id, uniqueness: { scope: :follower_id, message: "You are already following this user" }

    validate :user_cant_follow_self
    def user_cant_follow_self
        unless followed_id != follower_id
            errors.add(:follower_id, "can't follow self")
        end
    end


end
