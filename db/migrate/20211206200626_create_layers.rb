class CreateLayers < ActiveRecord::Migration[6.1]
  def change
    create_table :layers do |t|
      t.integer :position
      t.references :drawing, null: false, foreign_key: true

      t.timestamps
    end
  end
end
