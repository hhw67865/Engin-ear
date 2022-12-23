class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :pronouns
      t.string :email
      t.string :password_digestlocation
      t.string :job_title
      t.string :employer
      t.boolean :open_to_work?
      t.string :profile_picture

      t.timestamps
    end
  end
end
