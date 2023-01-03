class CommentUserInfoSerializer < ActiveModel::Serializer
  attributes :name, :pronouns, :job_title
end
