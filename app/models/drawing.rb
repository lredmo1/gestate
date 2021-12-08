class Drawing < ApplicationRecord
  belongs_to :user
  has_many :layers
end
