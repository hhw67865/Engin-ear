class PostTagsOnPostSerializer < ActiveModel::Serializer
  attributes :id, :emoji, :tag
  has_one :post
  has_one :tag
end
