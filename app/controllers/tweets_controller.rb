class TweetsController < ApplicationController
  skip_before_action :verify_authenticity_token


  def index
    @tweets = Tweet.order("created_at DESC")
  end

  def create
    if params[:username][0] != "@"
      params[:username] = "@#{params[:username]}"
    end
    @tweet = Tweet.new(content: params[:content], username: params[:username])
    if @tweet.save
      redirect_to root_url
    else
      render plain: "Error saving tweet", status: 422
    end
  end

end
