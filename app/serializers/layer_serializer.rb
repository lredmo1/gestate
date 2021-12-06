class LayerSerializer < ActiveModel::Serializer
  attributes :id, :position
  has_one :drawing
end
