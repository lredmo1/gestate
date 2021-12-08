class User < ApplicationRecord
    has_secure_password

    has_many :drawings, dependent: :destroy
    validates :username, presence: true, uniqueness: true 
    # validates :email, format: /\w+@\w+\.{1}[a-zA-Z]{2,}/, presence: true, uniqueness: true
end
