class FollowersSerializer < ActiveModel::Serializer
  attributes :id, :name


  def id
    User.find(self.object.follower_id).id
  end

  def name
    User.find(self.object.follower_id).name
  end
end

