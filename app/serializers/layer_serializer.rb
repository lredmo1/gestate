class LayerSerializer < ActiveModel::Serializer
  attributes :id, :position, :information, :name, :strokes
  has_one :drawing
  has_many :strokes
end
