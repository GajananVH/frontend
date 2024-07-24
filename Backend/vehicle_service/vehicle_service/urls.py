from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api import views

router = DefaultRouter()
router.register(r'components', views.ComponentViewSet)
router.register(r'vehicles', views.VehicleViewSet)
router.register(r'issues', views.IssueViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
