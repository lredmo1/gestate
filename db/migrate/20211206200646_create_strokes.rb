class CreateStrokes < ActiveRecord::Migration[6.1]
  def change
    create_table :strokes do |t|
      t.string :start_stroke
      t.string :line_path
      t.references :layer, null: false, foreign_key: true

      t.timestamps
    end
  end
end
