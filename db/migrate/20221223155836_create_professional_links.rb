class CreateProfessionalLinks < ActiveRecord::Migration[7.0]
  def change
    create_table :professional_links do |t|
      t.string :name
      t.string :link
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
