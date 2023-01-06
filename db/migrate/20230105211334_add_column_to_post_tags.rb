class AddColumnToPostTags < ActiveRecord::Migration[7.0]
  def change
    add_column :post_tags, :emoji, :string
  end
end
