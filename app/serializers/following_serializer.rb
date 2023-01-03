class FollowingSerializer < ActiveModel::Serializer
  attributes :id, :name


  def id
    User.find(self.object.followed_id).id
  end

  def name
    User.find(self.object.followed_id).name
  end

end
