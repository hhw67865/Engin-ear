class Post < ApplicationRecord
  belongs_to :user
  has_many :comments
  has_many :users_who_commented, through: :comments, source: :user

  has_many :post_tags
  has_many :tags, through: :post_tags
end
