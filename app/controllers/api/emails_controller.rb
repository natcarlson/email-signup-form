class Api::EmailsController < ApplicationController

  def index
    emails = Email.all
    render json: {emails: emails}
  end

  def create
    new_email = Email.create( email_params )
    render json: new_email
  end



  private

  def email_params
    params.require(:email).permit(:first_name, :last_name, :email, :city, :state, :country)
  end



end
