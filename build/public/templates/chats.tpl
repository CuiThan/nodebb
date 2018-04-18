<!-- IF breadcrumbs.length -->
<ol class="breadcrumb">
	<!-- BEGIN breadcrumbs -->
	<li<!-- IF @last --> component="breadcrumb/current"<!-- ENDIF @last --> itemscope="itemscope" itemtype="http://data-vocabulary.org/Breadcrumb" <!-- IF @last -->class="active"<!-- ENDIF @last -->>
		<!-- IF !@last --><a href="{breadcrumbs.url}" itemprop="url"><!-- ENDIF !@last -->
			<span itemprop="title">
				{breadcrumbs.text}
				<!-- IF @last -->
				<!-- IF !feeds:disableRSS -->
				<!-- IF rssFeedUrl --><a target="_blank" href="{rssFeedUrl}"><i class="fa fa-rss-square"></i></a><!-- ENDIF rssFeedUrl --><!-- ENDIF !feeds:disableRSS -->
				<!-- ENDIF @last -->
			</span>
		<!-- IF !@last --></a><!-- ENDIF !@last -->
	</li>
	<!-- END breadcrumbs -->
</ol>
<!-- ENDIF breadcrumbs.length -->

<div class="chats-full">
	<div component="chat/nav-wrapper" data-loaded="<!-- IF roomId -->1<!-- ELSE -->0<!-- END -->">
		<div class="chat-search dropdown">
			<input class="form-control" type="text" component="chat/search" placeholder="[[users:enter_username]]" data-toggle="dropdown" />
			<ul component="chat/search/list" class="dropdown-menu"></ul>
		</div>

		<ul component="chat/recent" class="chats-list" data-nextstart="{nextStart}">
			<!-- BEGIN rooms -->
			<li component="chat/recent/room" data-roomid="{rooms.roomId}" class="<!-- IF rooms.unread -->unread<!-- ENDIF rooms.unread -->">
	<!-- IF rooms.lastUser.uid -->
	<div class="chat-image" data-username="{rooms.lastUser.username}" data-uid="{rooms.lastUser.uid}">
		<!-- IF rooms.lastUser.picture -->
		<img class="user-avatar" src="{rooms.lastUser.picture}" title="{rooms.lastUser.username}">
		<!-- ELSE -->
		<div class="user-icon" style="background-color: {rooms.lastUser.icon:bgColor};" title="{rooms.lastUser.username}">{rooms.lastUser.icon:text}</div>
		<!-- ENDIF rooms.lastUser.picture -->
	</div>
	<!-- ELSE -->
	[[modules:chat.no-users-in-room]]
	<!-- ENDIF rooms.lastUser.uid -->
	<div class="chat-body">
		<div class="chat-main">
			<div class="chat-room-name">
				<span component="chat/title"><!-- IF rooms.roomName -->{rooms.roomName}<!-- ELSE -->{rooms.usernames}<!-- ENDIF rooms.roomName --></span>
			</div>
		</div>

	</div>
</li>
			<!-- END rooms -->
		</ul>
	</div>

	<div component="chat/main-wrapper">
		<!-- IF roomId -->
<div component="chat/messages" class="expanded-chat" data-roomid="{roomId}">
	<div component="chat/header">
		<button type="button" class="close" data-action="pop-out"><span aria-hidden="true"><i class="fa fa-compress"></i></span><span class="sr-only">[[modules:chat.pop-out]]</span></button>
		
		<div class="dropdown pull-right">
			<button class="close" data-toggle="dropdown" component="chat/controlsToggle"><i class="fa fa-gear"></i></button>
			<ul class="dropdown-menu dropdown-menu-right pull-right" component="chat/controls">
				<!-- IF users.length -->
				<li class="dropdown-header">[[modules:chat.in-room]]</li>
				<!-- BEGIN users -->
				<li>
					<a href="{config.relative_path}/uid/{../uid}">
						<!-- IF ../picture -->
						<img class="avatar avatar-sm" component="user/picture" src="{../picture}" itemprop="image" />
						<!-- ELSE -->
						<div class="avatar avatar-sm" component="user/picture" style="background-color: {../icon:bgColor};">{../icon:text}</div><!-- END -->{../username}
					</a>
				</li>
				<!-- END -->
				<li role="separator" class="divider"></li>
				<!-- END -->
				<li class="dropdown-header">[[modules:chat.options]]</li>
				<li>
					<a href="#" data-action="members"><i class="fa fa-fw fa-plus"></i> [[modules:chat.add-users-to-room]]</a>
				</li>
				<li>
					<a href="#" data-action="rename"><i class="fa fa-fw fa-edit"></i> [[modules:chat.rename-room]]</a>
				</li>
				<li>
					<a href="#" data-action="leave"><i class="fa fa-fw fa-sign-out"></i> [[modules:chat.leave]]</a>
				</li>
			</ul>
		</div>
		<span class="members">
			[[modules:chat.chatting_with]]:
			<!-- BEGIN users -->
			<a href="{config.relative_path}/uid/{../uid}">{../username}</a><!-- IF !@last -->,<!-- END -->
			<!-- END -->
		</span>
	</div>
	<ul class="chat-content">
		<!-- BEGIN messages -->
<li component="chat/message" class="chat-message clear<!-- IF ../deleted --> deleted<!-- END -->" data-index="{messages.index}" data-mid="{messages.messageId}" data-uid="{messages.fromuid}" data-self="{messages.self}" data-break="{messages.newSet}" data-timestamp="{messages.timestamp}">
	<div class="message-header">
		<a class="chat-avatar" href="{config.relative_path}/user/{messages.fromUser.userslug}">
			<!-- IF messages.fromUser.picture -->
			<img class="user-avatar" src="{messages.fromUser.picture}">
			<!-- ELSE -->
			<div class="user-icon" style="background-color: {messages.fromUser.icon:bgColor};">{messages.fromUser.icon:text}</div>
			<!-- ENDIF messages.fromUser.picture -->
		</a>
		<strong><span class="chat-user"><a href="{config.relative_path}/user/{messages.fromUser.userslug}">{messages.fromUser.username}</a></span></strong>
		<!-- IF ../fromUser.banned -->
		<span class="label label-danger">[[user:banned]]</span>
		<!-- END -->
		<!-- IF ../fromUser.deleted -->
		<span class="label label-danger">[[user:deleted]]</span>
		<!-- END -->
		<span class="chat-timestamp timeago" title="{messages.timestampISO}"></span>
	</div>
	<div component="chat/message/body" class="message-body">
		<!-- IF messages.edited -->
		<small class="text-muted pull-right" title="[[global:edited]] {messages.editedISO}"><i class="fa fa-edit"></i></span></small>
		<!-- ENDIF messages.edited -->

		<!-- IF !config.disableChatMessageEditing -->
		<!-- IF messages.self -->
		<div class="pull-right btn-group controls">
			<button class="btn btn-xs btn-link" data-action="edit"><i class="fa fa-pencil"></i></button>
			<button class="btn btn-xs btn-link" data-action="delete"><i class="fa fa-times"></i></button>
			<button class="btn btn-xs btn-link" data-action="restore"><i class="fa fa-repeat"></i></button>
		</div>
		<!-- ENDIF messages.self -->
		<!-- ENDIF !config.disableChatMessageEditing -->

		{messages.content}
	</div>
</li>
<!-- END messages -->
	</ul>
	<div component="chat/composer">
		<textarea component="chat/input" placeholder="[[modules:chat.placeholder]]" class="form-control chat-input mousetrap" rows="2"></textarea>
		<button class="btn btn-primary" type="button" data-action="send"><i class="fa fa-fw fa-2x fa-paper-plane"></i></button>
		<span component="chat/message/remaining">{maximumChatMessageLength}</span>
	</div>
</div>
<!-- ELSE -->
<div class="alert alert-info">
	[[modules:chat.no-messages]]
</div>
<!-- ENDIF roomId -->
	</div>
</div>
