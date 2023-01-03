class UserInfoSerializer < ActiveModel::Serializer
  attributes :id, :name, :pronouns, :job_title
end
