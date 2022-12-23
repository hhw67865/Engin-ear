class AddColumnToFollows < ActiveRecord::Migration[7.0]
  def change
    add_column :follows, :followed_id, :integer, null: false
    add_column :follows, :follower_id, :integer, null: false
  end
end
