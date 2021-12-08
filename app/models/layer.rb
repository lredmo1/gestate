class Layer < ApplicationRecord
  belongs_to :drawing
  has_many :strokes, dependent: :destroy
end
