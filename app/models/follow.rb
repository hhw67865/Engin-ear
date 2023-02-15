class Follow < ApplicationRecord
    
  belongs_to :follower, class_name: "User"
  belongs_to :followed, class_name: "User"
    
  validates :follower_id, uniqueness: { scope: :followed_id, message: "You can't follow yourself" }
  # can't follow yourself

  validates :followed_id, uniqueness: { scope: :follower_id, message: "You are already following this user" }
  # can't follow the same person twice

end
