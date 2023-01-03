class ProfessionalLinkSerializer < ActiveModel::Serializer
  attributes :id, :name, :link
  has_one :user, serializer: UserInfoSerializer
end
