class AddInformationToLayers < ActiveRecord::Migration[6.1]
  def change
    add_column :layers, :information, :string
    add_column :layers, :name, :string
  end
end
