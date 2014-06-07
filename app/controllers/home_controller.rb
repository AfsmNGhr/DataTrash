class HomeController < ApplicationController

def index
    @homes = homes

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @home }
    end
end

def show
    @homes = home.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @home }
    end
end



end
