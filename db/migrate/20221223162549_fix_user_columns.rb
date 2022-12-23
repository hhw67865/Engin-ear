class FixUserColumns < ActiveRecord::Migration[7.0]
  def change
    rename_column :users, :password_digestlocation, :password_digest
    add_column :users, :location, :string
  end
end
