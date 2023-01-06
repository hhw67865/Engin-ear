class PostSerializer < ActiveModel::Serializer
  include ActionView::Helpers::DateHelper
  attributes :id, :title, :post_body, :picture_url, :created_at_ago
  has_one :user
  has_many :comments
  has_many :tags

  def created_at_ago
    "#{time_ago_in_words(object.created_at)} ago"
  end


end
