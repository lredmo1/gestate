class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :username, :prof_pic_url
  has_many :drawings
end
