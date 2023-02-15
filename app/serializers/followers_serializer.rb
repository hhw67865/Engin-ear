class FollowersSerializer < ActiveModel::Serializer

  attributes :id, :name, :profile_picture

  def id
    User.find(self.object.follower_id).id
  end

  def name
    User.find(self.object.follower_id).name
  end

  def profile_picture
    User.find(self.object.follower_id).profile_picture
  end

end
