class AddDrawingToStrokes < ActiveRecord::Migration[6.1]
  def change
    add_reference :strokes, :drawing, null: false, foreign_key: true
  end
end
