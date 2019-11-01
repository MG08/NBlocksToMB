
class WelcomeController < ApplicationController

  Browser::Base.include(Browser::Aliases)
  def index
    @browser = Browser.new("Some user agent")
  end

  def index_mobile
  end
end
