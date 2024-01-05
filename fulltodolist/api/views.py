from django.shortcuts import render
# from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Task
from .serializers import TaskSerializer


@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'List':'/task-list',
        'Detail View':'/task-detail/<str:pk>/',
        'Create':'/task-create',
        'Update':'/task-update/<str:pk>',
        'Delete':'/task-delete/<str:pk>',
        'Status':'/task-status/<str:pk>',
    }
    return Response(api_urls)


@api_view(['GET'])
def taskList(request):
    tasks = Task.objects.all()
    serializer = TaskSerializer(tasks , many=True)
    return Response(serializer.data)


@api_view(['GET'])
def taskDetail(request , pk):
    task = Task.objects.get(id = pk)
    serializer = TaskSerializer(task , many=False)
    return Response(serializer.data)

@api_view(['POST'])
def taskCreate(request):
    serializer = TaskSerializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['POST'])
def taskUpdate(request , pk):
    task = Task.objects.get(id = pk)
    serializer = TaskSerializer(instance=task , data=request.data)
    
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)



@api_view(['DELETE'])
def taskDelete(request , pk):
    task = Task.objects.get(id = pk)
    task.delete()
    return Response("Item deleted")

@api_view(['POST'])
def taskStatus(request, pk):
    try:
        task = Task.objects.get(id=pk)
    except Task.DoesNotExist:
        return Response({'error': 'Task not found'}, status=404)

    # Toggle the status
    task.status = not task.status
    task.save()

    # You can use the serializer to get the updated data, but it's not necessary for saving changes
    serializer = TaskSerializer(instance=task)

    return Response(serializer.data)