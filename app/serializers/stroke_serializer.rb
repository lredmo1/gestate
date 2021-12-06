class StrokeSerializer < ActiveModel::Serializer
  attributes :id, :start_stroke, :line_path
  has_one :layer
end
