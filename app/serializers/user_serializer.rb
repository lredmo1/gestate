class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :username, :password_digest, :prof_pic_url
end
