class DrawingSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :layers
end
