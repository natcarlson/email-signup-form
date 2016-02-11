class CreateEmails < ActiveRecord::Migration
  def change
    create_table :emails do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :city
      t.string :state
      t.string :country

      t.timestamps null: false
    end
  end
end
