require 'test_helper'

class NavigatorControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get navigator_home_url
    assert_response :success
  end

end
